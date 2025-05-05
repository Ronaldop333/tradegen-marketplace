export async function getUsers() {
    const res = await fetch('/api/users');
    if (!res.ok) throw new Error('Erro ao buscar usuários');
    return res.json();
  }
  