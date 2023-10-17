if (!process.env.PINECONE_INDEX_NAME) {
  throw new Error('Missing Pinecone index name in .env file');
}

export const PINECONE_INDEX_NAME = 'chat23';

export const PINECONE_NAME_SPACE = ''; // Remove the namespace
