type Data = { id: number; email: string; first_name: string; last_name: string; avatar: string };

type UsersResponse = {
  data?: Data[];
  errors?: Array<{ message: string }>;
};

type UserResponse = {
  data?: Data;
  errors?: Array<{ message: string }>;
};

export async function getUsers(): Promise<{ data: Data[] | undefined }> {
  const response = await fetch('https://reqres.in/api/users?page=2');
  const { data }: UsersResponse = await response.json();

  return { data };
}

export async function getUser(id: string | number) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const { data }: UserResponse = await response.json();

  return { data };
}
