import Head from 'next/head';

const Hello = ({ name }: { name: string }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Hello {name}!!</title>
      </Head>
      <h1>Hello {name}!!</h1>
    </div>
  );
};

export default Hello;
