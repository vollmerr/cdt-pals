const request = require('request-promise');

// https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/HEAD/docs/CustomAuthenticationProvider.md
class TokenProvider {
  constructor() {
    // https://developer.microsoft.com/en-us/graph/graph-explorer
    this.token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjVYWXR4eXlsZzlqUHlkNzN2X3JNUlJWY19PSzNnYlQ3MzEyOFNmejJqWTQiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC81MmIyNmJlNC03ZjVkLTRlMWMtYmFlZC04Y2Y3NWI3NTcwZDUvIiwiaWF0IjoxNTY3MTE1MzY2LCJuYmYiOjE1NjcxMTUzNjYsImV4cCI6MTU2NzExOTI2NiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhNQUFBQUQ0VEY1c2NhQk9oSDVmNzNkZSs3d29kbnJvbExtWDQzMzZiNS9XQy95Zzg9IiwiYW1yIjpbIndpYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBleHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJWb2xsbWVyIiwiZ2l2ZW5fbmFtZSI6IlJ5YW4iLCJpcGFkZHIiOiIxMzQuMTg3LjIxMi4xMjEiLCJuYW1lIjoiVm9sbG1lciwgUnlhbkBDSU8iLCJvaWQiOiJiMmZiYTJiNy05YWY0LTQ3MTgtOTM2Yi1iOWI4ZjU5MjMxMjEiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtNjk1ODExMzg5LTE4NzM5NjU0NzMtOTUyMjk4Ni0yMzAxOCIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzN0ZGRTk5NEQyQ0U5Iiwic2NwIjoiQ2FsZW5kYXJzLlJlYWRXcml0ZSBDb250YWN0cy5SZWFkV3JpdGUgRmlsZXMuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWRXcml0ZSBOb3Rlcy5SZWFkV3JpdGUuQWxsIG9wZW5pZCBQZW9wbGUuUmVhZCBwcm9maWxlIFNpdGVzLlJlYWQuQWxsIFNpdGVzLlJlYWRXcml0ZS5BbGwgVGFza3MuUmVhZFdyaXRlIFVzZXIuUmVhZEJhc2ljLkFsbCBVc2VyLlJlYWRXcml0ZSBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJpbmtub3dubnR3ayJdLCJzdWIiOiIydzBTQVJqMUk1VTEzYzZ6M2taN0N1ZG41UUFEbGIwbDgyT2duWTlBd2RNIiwidGlkIjoiNTJiMjZiZTQtN2Y1ZC00ZTFjLWJhZWQtOGNmNzViNzU3MGQ1IiwidW5pcXVlX25hbWUiOiJSeWFuLlZvbGxtZXJAc3RhdGUuY2EuZ292IiwidXBuIjoiUnlhbi5Wb2xsbWVyQHN0YXRlLmNhLmdvdiIsInV0aSI6ImVMNTJIUzBOM0UySnJjTmZ3b2dLQUEiLCJ2ZXIiOiIxLjAiLCJ4bXNfc3QiOnsic3ViIjoiTEtLWDdNTU8zd0xreDhCaTZXajZ3VHV6YkhrLUlvdmNfQ1JqZkVmQlpJTSJ9LCJ4bXNfdGNkdCI6MTQ2NjA5MTc3NX0.ZvaEB3AlESBgALAQkD-LjaN6jaZ0zqYyBakZDcFZMLgGql9BIOirCGVaQ76d6Zj6IuDt8ODlFTKpF9qqRYlTuX_lkA5AVWbfZz-eLcDWSND8qOgpxT9xigklT6so3S-Ix9aOjGoaercq4YVB3-CTmOAK2VhlNCQPczgWSZSzxuh8uk_9lNMolCnwh1EO3XB7KZ4wzyGGgxh81jjIDQJtd4uczE8aVtjrYzC3134iJajOyFJn0kgdq4Z00SN0TgRyROtk0pHYaId-_X8Rtj_1G5CC0kpVWti2ZulNUoANYRxywynid49XdTaYZCMyWVXwNdJ2VL1Sk4YRMxT87b1e8Q';
    // this.token = null;
    this.expiresAt = null;
  }

  async requestToken() {
    const res = await request;
    // .post('https://login.microsoftonline.com/eadaaa2f-1d17-482b-8b97-839ec8e97361/oauth2/v2.0/token')
    // .form({
    //   client_id: 'e6952d9c-5d8d-4362-9830-e770e85f834b',
    //   scope: 'https://graph.microsoft.com/.default',
    //   client_secret: '',
    //   grant_type: 'client_credentials',
    // });

    const jsonRes = JSON.parse(res);
    this.token = jsonRes.access_token;
    console.log('token', this.token);
    this.expiresAt = Date.now() + jsonRes.expires_in;
  }

  async getAccessToken() {
    if (!this.token || this.expiresAt < Date.now()) {
      // await this.requestToken();
    }

    return this.token;
  }
}

module.exports = TokenProvider;
