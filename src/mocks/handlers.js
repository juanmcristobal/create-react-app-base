import { rest } from 'msw';
export const handlers = [
  rest.get('/api/getTodos', (request, response, context) => {
    return response(
      context.status(200),
      context.json([
        { id: 1, todo: 'Shop Groceries' },
        { id: 2, todo: 'Send the parcels' },
      ]),
    );
  }),
];
