export function clearToken(): void {
  localStorage.removeItem("cat");
}

export function setToken(token: string): void {
  localStorage.setItem("cat", token);
}

export function getToken(): string | null {
  const cat = localStorage.getItem("cat");
  return cat;
}
