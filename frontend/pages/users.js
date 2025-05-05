import { getUsers } from '../lib/api';

export default function UsersPage({ users }) {
  return (
    <main>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const users = await getUsers();
    return { props: { users } };
  } catch (err) {
    return { props: { users: [] } };
  }
}
