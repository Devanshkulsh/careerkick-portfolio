import { useMemo } from "react";

type VideoCardProps = {
  youtubeUrl: string;
  title: string;
};

type VideoItem = {
  youtubeUrl: string;
  title: string;
};

const videos: VideoItem[] = [
  {
    youtubeUrl: "https://youtu.be/iK_aVbifdWI?si=jozOECzmjE8MmRVI",
    title: "BAMS College Growth Strategy",
  },
  {
    youtubeUrl: "https://youtu.be/tJx9GXogEKE?si=9zZveCOmwW8pr50S",
    title: "Admission Funnel Optimization",
  },
  {
    youtubeUrl: "https://youtu.be/1YioTHDU0UA?si=Genw3FHoU5DeoSbX",
    title: "BAMS Branding and Outreach",
  },
];

const extractYouTubeId = (url: string) => {
  const cleanUrl = url.trim();

  if (!cleanUrl) return null;

  if (cleanUrl.includes("youtu.be/")) {
    return cleanUrl.split("youtu.be/")[1]?.split(/[?&/]/)[0] ?? null;
  }

  try {
    const parsed = new URL(cleanUrl);
    const watchId = parsed.searchParams.get("v");
    if (watchId) return watchId;

    if (parsed.pathname.startsWith("/embed/")) {
      return parsed.pathname.replace("/embed/", "").split("/")[0] || null;
    }
  } catch {
    return null;
  }

  return null;
};

const VideoCard = ({ youtubeUrl, title }: VideoCardProps) => {
  const videoId = useMemo(() => extractYouTubeId(youtubeUrl), [youtubeUrl]);
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`
    : "";

  return (
    <div className="w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-md transition-shadow hover:shadow-lg sm:rounded-2xl">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="absolute left-0 top-0 h-full w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex h-full w-full items-center justify-center text-sm text-gray-400">
            Add valid YouTube link
          </div>
        )}
      </div>
    </div>
  );
};

export default function ThoughtLeadership() {
  return (
    <section
      className="w-full bg-cover bg-center px-4 py-12 sm:px-6 sm:py-20 lg:px-8"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="mx-auto max-w-7xl rounded-2xl bg-white px-5 py-10 shadow-xl sm:rounded-3xl sm:px-12 sm:py-16 lg:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="section-kicker text-emerald-700">
            Thought Leadership
          </span>
          <h2 className="section-title mt-4 text-gray-900">
            Insights for <span className="text-emerald-700">BAMS Colleges</span>
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl text-gray-600 sm:mt-6">
            Expert video insights on admissions growth, counseling systems, and brand-building
            strategies for Ayurveda institutions across India.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard
              key={`${video.youtubeUrl}-${index}`}
              youtubeUrl={video.youtubeUrl}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
