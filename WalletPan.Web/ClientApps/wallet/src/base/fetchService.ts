import fetch from 'cross-fetch';

const Method = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const ContentType = {
  json: 'application/json; charset=utf-8',
  wwwform: "'application/x-www-form-urlencoded'",
};

const Mode = {
  cors: 'cors',
  nocors: 'no-cors',
  same: 'same-origin',
};

const Cache = {
  nochache: 'no-cache',
  default: 'default',
  reload: 'reload',
  force: 'force-cache',
  only: 'only-if-cached',
};

const Credentials = {
  same: 'same-origin',
  omit: 'omit',
};

function baseFetch(
  url: any,
  data: any,
  contentType: any,
  method: any,
  headers: any,
  mode: any,
  cache: any,
  credentials: any,
  callback: any
) {
  fetch(url, {
    method: method,
    mode: mode,
    cache: cache,

    headers: {
      'Content-Type': contentType,
      Accept: '*/*',
      Connection: 'keep-alive',
    },

    body: data, // body data type must match "Content-Type" header
  })
    .then((response) => response.json())
    .then((responseJSON) => callback(responseJSON))

    .catch((error) => {
      console.error('Error:', error);
    });
}

export function postData(url: any, data: any, callback: any) {
  baseFetch(
    url,
    JSON.stringify(data),
    ContentType.json,
    Method.POST,
    null,
    Mode.cors,
    Cache.nochache,
    Credentials.omit,
    callback
  );
}

export function putData(url: any, data: any, callback: any) {
  baseFetch(
    url,
    JSON.stringify(data),
    ContentType.json,
    Method.PUT,
    null,
    Mode.nocors,
    Cache.nochache,
    Credentials.omit,
    callback
  );
}

export function deleteData(url: any, data: any) {
  baseFetch(
    url,
    JSON.stringify(data),
    ContentType.json,
    Method.DELETE,
    null,
    Mode.nocors,
    Cache.nochache,
    Credentials.omit,
    null
  );
}

export async function getData(url: any, callback: any) {
  baseFetch(
    url,
    null,
    ContentType.json,
    Method.GET,
    null,
    Mode.cors,
    Cache.nochache,
    Credentials.omit,
    callback
  );
}
