const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 */
async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}
export async function listUsers2(params, signal) {
  if (params) {
    const url = new URL(`${API_BASE_URL}/users`);
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString())
    );
    return await fetchJson(url, { headers, signal }, []);
  } else {
    const url = `${API_BASE_URL}/users`;
    return await fetchJson(url, { headers, signal }, []);
  }
}
export async function listUsers(signal) {
  const url = new URL(`${API_BASE_URL}/users`);
  return await fetchJson(url, { headers, signal }, []);
}

export async function createUser(data, signal) {
  const url = `${API_BASE_URL}/users`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data }),
    signal,
  };
  return await fetchJson(url, options, {});
}

export async function readUser(userId, signal) {
  const url = new URL(`${API_BASE_URL}/users/${userId}`);
  return await fetchJson(url, { headers, signal }, []);
}

export async function updateUser(data) {
  const url = `${API_BASE_URL}/users/${data.user_id}`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data }),
  };
  return await fetchJson(url, options, {});
}

export async function deleteUser(userId) {
  const url = `${API_BASE_URL}/users/${userId}`;
  return await fetchJson(url, { method: "DELETE", headers }, {});
}

export async function listHistory(signal) {
  const url = new URL(`${API_BASE_URL}/track`);
  return await fetchJson(url, { headers, signal }, []);
}
export async function createSurvey(data, signal) {
  const url = `${API_BASE_URL}/track/new`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data }),
    signal,
  };
  return await fetchJson(url, options, {});
}
export async function readSurvey(trackId, signal) {
  const url = new URL(`${API_BASE_URL}/track/${trackId}`);
  return await fetchJson(url, { headers, signal }, []);
}
export async function updateSurvey(data) {
  const url = `${API_BASE_URL}/track/${data.user_id}`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data }),
  };
  return await fetchJson(url, options, {});
}
export async function readUserHistory(userId, signal) {
  const url = new URL(`${API_BASE_URL}/track/users/${userId}`);
  return await fetchJson(url, { headers, signal }, []);
}

  export async function readHistoryActivityId(activityId, signal) {
    const url = new URL(`${API_BASE_URL}/history/${activityId}`);
    return await fetchJson(url, { headers, signal }, [])
  }

  export async function deleteSurvey(activityId) {
    const url = `${API_BASE_URL}/track/${activityId}`;
    return await fetchJson(url, { method: "DELETE", headers }, {});
  }

  export async function listStrategies(params, signal) {
    const url = new URL(`${API_BASE_URL}/strategies`);
    Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value.toString())
  );
  console.log(url)
    return await fetchJson(url, { headers, signal }, [])
  }

export async function listStrategiesByType(strategyId, signal) {
  const url = new URL(`${API_BASE_URL}/strategies/${strategyId}`);
  return await fetchJson(url, { headers, signal }, []);
}
