export default function People() {
    return (
      <>
        {/* Team Section: Circle Photos With Title */}
        <div className="bg-white">
          <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            {/* Heading */}
            <div className="text-center">
              <div className="text-sm uppercase font-bold tracking-wider mb-1 text-purple-700">
                Real People
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Meet our talented team
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
                They are working nonstop behind the scenes to help you build better products, web services and websites.
              </h3>
            </div>
            {/* END Heading */}

            {/* Team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-center">
              <div>
                <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                  <img src="https://cdn.tailkit.com/media/placeholders/avatar-bY4GXQKfZrA-320x320.jpg" alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
                </span>
                <h4 className="text-xl font-semibold mb-1">
                  Irma Norton
                </h4>
                <p className="text-gray-600 font-medium">
                  Founder &amp; CEO
                </p>
              </div>
              <div>
                <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                  <img src="https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-320x320.jpg" alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
                </span>
                <h4 className="text-xl font-semibold mb-1">
                  Alejandro Lee
                </h4>
                <p className="text-gray-600 font-medium">
                  Product Design
                </p>
              </div>
              <div>
                <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                  <img src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-320x320.jpg" alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
                </span>
                <h4 className="text-xl font-semibold mb-1">
                  Elsa King
                </h4>
                <p className="text-gray-600 font-medium">
                  Web Developer
                </p>
              </div>
              <div>
                <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                  <img src="https://cdn.tailkit.com/media/placeholders/avatar-sibVwORYqs0-320x320.jpg" alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
                </span>
                <h4 className="text-xl font-semibold mb-1">
                  Alex Saunders
                </h4>
                <p className="text-gray-600 font-medium">
                  Marketing
                </p>
              </div>
              <div>
                <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                  <img src="https://cdn.tailkit.com/media/placeholders/avatar-euZ2n8dGUcQ-320x320.jpg" alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
                </span>
                <h4 className="text-xl font-semibold mb-1">
                  Herman Reese
                </h4>
                <p className="text-gray-600 font-medium">
                  Support Specialist
                </p>
              </div>
              <div>
                <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
                  <img src="https://cdn.tailkit.com/media/placeholders/avatar-DLKR_x3T_7s-320x320.jpg" alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
                </span>
                <h4 className="text-xl font-semibold mb-1">
                  Sue Keller
                </h4>
                <p className="text-gray-600 font-medium">
                  Web Developer
                </p>
              </div>
            </div>
            {/* END Team */}
          </div>
        </div>
        {/* END Team Section: Circle Photos With Title */}
      </>
    )
  }