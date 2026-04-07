"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

export type VideoEmbedProps = {
  src: string;
  title: string;
  description?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "9:16";
  className?: string;
  wrapperClassName?: string;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
};

const aspectClasses: Record<NonNullable<VideoEmbedProps["aspectRatio"]>, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "9:16": "aspect-[9/16]",
};

function getEmbedUrl(src: string) {
  if (src.includes("youtube.com/watch")) {
    const url = new URL(src);
    const videoId = url.searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : src;
  }

  if (src.includes("youtu.be/")) {
    const videoId = src.split("youtu.be/")[1]?.split("?")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : src;
  }

  if (src.includes("vimeo.com/") && !src.includes("player.vimeo.com")) {
    const videoId = src.split("vimeo.com/")[1]?.split("?")[0];
    return videoId ? `https://player.vimeo.com/video/${videoId}` : src;
  }

  return src;
}

export function VideoEmbed({
  src,
  title,
  description,
  aspectRatio = "16:9",
  className,
  wrapperClassName,
  allowFullScreen = true,
  loading = "lazy",
}: VideoEmbedProps) {
  const embedUrl = useMemo(() => getEmbedUrl(src), [src]);

  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
        wrapperClassName
      )}
      aria-label={title}
    >
      <div className={cn("relative w-full bg-slate-950", aspectClasses[aspectRatio])}>
        <iframe
          src={embedUrl}
          title={title}
          loading={loading}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={allowFullScreen}
          className={cn("absolute inset-0 h-full w-full", className)}
        />
      </div>

      {(description || title) && (
        <div className="space-y-2 p-4 sm:p-5">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          {description ? <p className="text-sm leading-6 text-slate-600">{description}</p> : null}
        </div>
      )}
    </section>
  );
}

export default VideoEmbed;
