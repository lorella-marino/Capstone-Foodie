import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  sub: string;
  exp: number;
  roles?: any;
}

export function getUserRoles(): string[] {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("Nessun token trovato.");
    return [];
  }

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    console.log("Token decodificato:", decoded);

    const roles = decoded.roles;
    console.log("Ruoli estratti:", roles);

    if (Array.isArray(roles)) {
      const result = roles
        .map((role) =>
          typeof role === "string" ? role : typeof role === "object" && role.authority ? role.authority : ""
        )
        .filter(Boolean);
      console.log("Ruoli mappati:", result);
      return result;
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
