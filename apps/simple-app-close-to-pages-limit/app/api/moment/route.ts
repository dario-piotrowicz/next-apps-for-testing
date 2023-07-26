
import moment from 'moment';

export const runtime = "edge";

export async function GET(request: Request) {
  return new Response(
    `
      The current time is: ${moment().format('LT')}
      meaning that the start of the hour was ${moment().startOf('hour').fromNow()}
    `
  );
}
