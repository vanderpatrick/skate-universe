import { rest } from "msw";
const baseURL = "https://skt-drf.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}/dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 7,
        username: "carlos",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 7,
        profile_image:
          "https://res.cloudinary.com/volendam/image/upload/v1/media/images/skaterboy_qt7pes",
      })
    );
  }),
  rest.post(`${baseURL}/dj-rest-auth/logout/`, (req,res,ctx)=>{
    return res(ctx.status(200))
  })
];
