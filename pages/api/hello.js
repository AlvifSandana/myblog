// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {"kode" : "nx", "title" : "Next JS"},
    {"kode" : "deno", "title" : "Deno TS"},
    {"kode" : "php", "title" : "PHP"},
    // {"kode" : "js", "title" : "Javascript"},
    // {"kode" : "aspx", "title" : "ASPX"}
  ])
}
