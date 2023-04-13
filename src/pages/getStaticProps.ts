import { prisma } from '../../lib/prisma';

export const getStaticProps = async () => {
  const feed = await prisma.author.findMany();
  return {
    props: { feed },
  };
};
