const API_URL = "http://localhost:4444";

export const addTask = async (obj) => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  try {
    const response = await fetch(`${API_URL}/tasks`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTasks = async () => {
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };
  try {
    const response = await fetch(`${API_URL}/tasks`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = async (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  };
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = async (id, reqBody) => {
  const options = {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body:JSON.stringify(reqBody)
 };

  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

