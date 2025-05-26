import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  sub: string;
  exp: number;
  roles?: any;
}

export function getUserRoles(): string[] {
  const token = localStorage.getItem("token");
  if (!token) return [];

  try {
    const decoded = jwtDecode<JwtPayload>(token);

    const roles = decoded.roles;

    if (Array.isArray(roles)) {
      return roles
        .map((role) =>
          typeof role === "string" ? role : typeof role === "object" && role.authority ? role.authority : ""
        )
        .filter(Boolean);
    }

    if (typeof roles === "string") return [roles];

    return [];
  } catch (e) {
    console.error("Errore nel decoding del token:", e);
    return [];
  }
}

export function isAdmin(): boolean {
  return getUserRoles().includes("ROLE_ADMIN");
}

export function isLogged(): boolean {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (e) {
    return false;
  }
}
