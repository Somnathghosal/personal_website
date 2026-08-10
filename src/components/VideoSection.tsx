import video2 from "../assests/Geo-Action_Lab_Video.mp4";

const VideoSection = () => {

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10">
          More About Our Participatory Action Research Projects
        </h2>

        {/* Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-10">

          {/* Video 1 */}
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/eN7i6jJYchg"
              title="Participatory Action Research Projects"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={video2}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">

          <p className="text-gray-700 text-lg md:text-xl text-center mb-8">
            Our participatory action research focuses on the intersection of
            rural geography, development, and sustainability. These videos
            showcase how we integrate technology, community participation,
            and field-based research to create sustainable solutions for
            rural communities.
          </p>

          {/* Key Takeaways */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">

            <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-5">
              Key Takeaways
            </h3>

            <ul className="space-y-4">

              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700 text-base md:text-lg">
                  Innovative approaches to community-based research.
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700 text-base md:text-lg">
                  Integration of traditional knowledge with modern technology.
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700 text-base md:text-lg">
                  Sustainable development practices for rural communities.
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span className="text-gray-700 text-base md:text-lg">
                  Policy recommendations based on extensive field research.
                </span>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </div>
  );
};

export default VideoSection;