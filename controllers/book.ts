import DinosaurModel from "../models/Dinosaur.ts";

function getAllBook() {
  return [
    {
      id: 1,
      name: "hello",
      logo: "hi",
    },
  ];
}
async function createBook({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const result = await DinosaurModel.create({
    name,
    description,
  });

  return result;
}
export { getAllBook, createBook };
