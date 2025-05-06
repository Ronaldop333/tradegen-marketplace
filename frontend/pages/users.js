import { getUsers } from '../lib/api';
import { useState } from 'react';

export default function UsersPage({ users: initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState({ name: '', email: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const newUser = await res.json();
      setUsers([...users, newUser]);
      setForm({ name: '', email: '' });
    } else {
      alert('Erro ao cadastrar usuário');
    }
  }

  return (
    <main>
      <h1>Usuários</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} - {u.email}</li>
        ))}
      </ul>

      <h2>Cadastrar novo usuário</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const users = await getUsers();
    return { props: { users } };
  } catch {
    return { props: { users: [] } };
  }
}
