const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {

  let created = await prisma.user.create({
    data: {
      email: "foo@example.org"
    }
  })
  console.log({ created })

  const findMany = await prisma.user.findMany()
  console.log({ findMany })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })