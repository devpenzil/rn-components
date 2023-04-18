export type component = {
  cname: string;
  description: string;
  upvotes: number;
  downvotes: number;
  previewurl: string;
  author: {
    uid: string;
    image: string;
    username: string;
  };
  files: {
    code: string;
    filename: string;
  }[];
};
