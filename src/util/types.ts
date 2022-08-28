export interface TypedRequestQuery extends Express.Request {
  query: { image_url: string };
}
