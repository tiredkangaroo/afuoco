export interface Tasklist {
  id: string;
  title: string;
  updated: string;
  task: Task[];
}

export interface Task {
  id: string;
  title: string;
  notes?: string;
  due?: string;
}

export class OAuthConfig {
  clientID: string;
  clientSecret?: string;
  authURL: string;
  tokenURL: string;
  redirectURL: string;
  scopes: string[];
  constructor(
    clientID: string,
    authURL: string,
    tokenURL: string,
    redirectURL: string,
    scopes: string[]
  ) {
    this.clientID = clientID;
    this.authURL = authURL;
    this.tokenURL = tokenURL;
    this.redirectURL = redirectURL;
    this.scopes = scopes;
  }
  AuthCodeURL() {
    const url = new URL(this.authURL);
    url.searchParams.append("client_id", this.clientID);
    url.searchParams.append("redirect_uri", this.redirectURL);
    url.searchParams.append("response_type", "code");
    url.searchParams.append("scope", this.scopes.join(" "));
    url.searchParams.append("access_type", "offline");
    url.searchParams.append("state", "state");
    return url.toString();
  }
}

class Token {
  access_token?: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  token_type?: string;
}
