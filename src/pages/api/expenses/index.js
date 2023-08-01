// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { get } from "../../../../services/day"

const products = get();

export default function handler(req, res) {
  if(req.method == "GET"){
    return res.status(200).json(products);
  }
  return res.status(404).send();
}
