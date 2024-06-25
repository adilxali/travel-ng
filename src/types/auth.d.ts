export type Role = "all" | "admin" | "user" |"super-admin"
export type Roles = role | role[]

export interface RouteMetaAuth {
	checkAuth?: boolean
	authRedirect?: string
	auth?: boolean
	roles?: Roles
}
export interface LoginPayload {
	email: string;
	password: string;
  }
