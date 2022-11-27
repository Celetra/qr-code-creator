import { type NextApiRequest, type NextApiResponse } from "next";
import { ImageResponse } from "@vercel/og";

const og = async (req: NextApiRequest, res: NextApiResponse<ImageResponse>) => {
  // Get query params from request url
  const url = new URL(req.url!, "http://localhost:3000");
  const username = url.searchParams.get("username");

  if (!username) {
    return res.status(400).json({
      error: "username is required",
    });
  }

  return new ImageResponse(
    (
      <div tw="w-[1200px] h-[630px] relative text-red-500 flex flex-col items-center justify-center">
        <p>{username}</p>
        <img
          tw="absolute bottom-4 right-4"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=84x84&data=https://github.com/${username}`}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
};

export const config = {
  runtime: "experimental-edge",
};

export default og;
