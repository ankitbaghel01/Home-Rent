import React from "react";
import { Heart, Search, Star } from "lucide-react";

const RentalListings = () => {
  const listings = [
    {
      id: 1,
      title: "Flat in North Goa",
      location: "Goan Studio Near Vagator Beach",
      beds: 2,
      price: 43788,
      rating: 4.94,
      reviews: 31,
      image: "https://s3-alpha-sig.figma.com/img/ffb3/4f0a/a3a1c4cd27e67d1bc3cba2b9756cfea8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nchjl1SKKGEVdNZkC4C-CppjDmehZMausbmQgn7jMgs9Y6BqMGhgeXSDTM3DO6bj4Wcqb77bQLBzzHMmTSXgDOeYTQvN3PCD54QipXBBLl5eOm6HZxCxFDstl1c~0M89plMPR3wrfvUrTsXiVhoz~Hd-1U1BtomQptj~EQPgcrfDPBaCLCrCp6r4EISn23cYPmxpzz2m5BxSYMirf4pLwsPbfyV~-yguGUiOyKmLnRvJjZ9KrDPpIbLwy4KpGMwLMlO8xrA6xZmJIFanXkoF~7C-uEbLvtUpeK-lB7EQV3jQ6jnPiaQKOvrDtCRlonCIO7eD81q8a43xQsORObh6eQ__",
    },
    {
      id: 2,
      title: "Flat in Arambol",
      location: "Studio Apartment",
      beds: 1,
      price: 47188,
      rating: 4.94,
      reviews: 31,
      image: "https://s3-alpha-sig.figma.com/img/b532/c04c/4e946d20a644ee12948c4e2306b4ac28?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGI68aRS0NbgCR7aLU4ZFMpMuiojNUTdohLcXpAKTUnFyqS16fFxM-htV2yEBibxVCz8TctbNSoiJz0XtDqEeFkmb~uOwaHEs8XJgoaLdFLquk1KFFeCFZ1SlbV1FCH6yoCKkUYe5JQSPUEYW6rx~K~EGt05eoVC7TB4lxpn29NAncagV6DL3NEY14fFDgN0uQCPvVzH-PMGCj-rpQdtANCMq9UYa1VbIgVO45fpUFsNoXzVZ08NX1IaNHyqih9vFOkaj5khzHinghbf637SxwhGDbYbK7By5ITNv5SeTVD9a61QQoRZ7~d0dR5bxZ~cENiZQA-c0sV9ACuB51lSWQ",
    }
,    
    {
      id: 3,
      title: "Flat in Stay in Siolim",
      location: "Jenny's home",
      beds: 2,
      price: 26968,
      rating: 4.94,
      reviews: 31,
      image: "https://s3-alpha-sig.figma.com/img/bb52/e9f5/8c84d11e30d3cc1c5a1eda55dfd59f28?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W7nEOAWOBIDOEvXwJDM7Jp~n7l7V4tiPSwfdek8WsuK2cShJsfNEnPB3sACgqKeZg3YD0iP9OM8v9AhfU~RYXtvvSBM7txS8l-Vh5HtrkD1kPKW699Jz6YLG8Jw4Tx8G2q4qVOpWGcj8exkLSU5VC5sG0NNh38rU2l~a~Jq0mAPjwC6TKew1tTAV7owswWbjZztBo6aPmtRigPeARF9NKkMsBZPYQ17GBqX-DkE3QP6mj-BCP5uGr9r7bpQVQMbG~amhGlOCvnMLOjowScQUJvUO0W0jzdouUsL1LmPwTlUnhBiteI3tPbF7nh7TdOF0720WLgryvhR2ZoJ18~AToA__",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Find Your Perfect <span className="text-purple-600">Rental Home</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Beautifully curated rental homes that perfectly match your style and
          needs, making your search for the ideal living space effortless and
          enjoyable.
        </p>

        {/* Search Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Goa",
              "Mumbai",
              "Kolkata",
              "Jaipur",
              "Bangalore",
              "Kerala",
              "Pune",
            ].map((city) => (
              <button
                key={city}
                className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                {city}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Find your city"
              className="pl-4 pr-10 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm md:text-base"
            />
            <Search className="w-4 h-4 md:w-5 md:h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-base md:text-lg">
                    {listing.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{listing.location}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-sm">{listing.rating}</span>
                  <span className="text-gray-400 text-sm">
                    ({listing.reviews})
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">{listing.beds} beds</p>
                <p className="font-semibold">
                  ₹{listing.price.toLocaleString()}/month
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          View All
        </button>
      </div>
    </div>
  );
};

export default RentalListings;
