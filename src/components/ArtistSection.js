import React from "react";

const ArtistCard = ({ bgImage, profileImage, name, username }) => {
  return (
    <div className="relative w-60 h-32 rounded-lg mb-4 overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt={`${name} background`}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Profile Image */}
      <div className="absolute bottom-4 left-4 w-10 h-10 border-2 border-white rounded-md">
        <img
          src={profileImage}
          alt={`${name} profile`}
          className="w-full h-full rounded-md object-cover"
        />
        {/* Green Dot */}
        <div
          className="absolute -top-2 -right-2 w-3 h-3 bg-[#0EC297] border-2 border-white rounded-full"
          style={{
            top: '-6px', // Adjust the position as necessary
            right: '-6px',
          }}
        ></div>
      </div>
      {/* Text */}
      <div className="absolute bottom-2 left-20 text-white">
        <p className="font-semibold text-base">{name}</p>
        <p className="text-sm">@{username}</p>
      </div>
    </div>
  );
};

const ArtistList = () => {
  const artists = [
    {
      bgImage: "/assets/3.png",
      profileImage: "/assets/4.png",
      name: "Thomas Edward",
      username: "thewildwithyou",
    },
    {
      bgImage: "/assets/4.png",
      profileImage: "/assets/3.png",
      name: "Chris Doe",
      username: "thewildwithyou",
    },
    {
      bgImage: "/assets/3.png",
      profileImage: "/assets/4.png",
      name: "Emilie Jones",
      username: "thewildwithyou",
    },
    {
      bgImage: "/assets/4.png",
      profileImage: "/assets/3.png",
      name: "Jessica Williams",
      username: "thewildwithyou",
    },
  ];

  return (
    <div className="flex flex-col items-start space-y-4">
      {/* Title with "Photographers" */}
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold text-black mb-4">Artists</h1>
        <h2 className="text-lg font-semibold text-gray-500 opacity-60">Photographers</h2>
      </div>
      {/* Artist Cards */}
      {artists.map((artist, index) => (
        <ArtistCard
          key={index}
          bgImage={artist.bgImage}
          profileImage={artist.profileImage}
          name={artist.name}
          username={artist.username}
        />
      ))}
      {/* Footer */}
      <div className="text-sm text-gray-600 mt-4">
        <p>Privacy • Terms of Service • Cookie Notice</p>
      </div>
    </div>
  );
};

export default ArtistList;
