const user = {
  name: "Rakesh Balugram",
  imageUrl: "https://fastly.4sqi.net/img/user/260x260/58595998-CBUAZCBHZBFBZGXF.jpg",
  imageSize: 90
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
