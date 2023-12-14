import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase-backend.fly.dev");
pb.autoCancellation(false); //prob not a good idea but a quick fix

export default pb;
