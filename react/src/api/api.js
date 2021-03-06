import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        "API-KEY": "773e312e-d947-42e8-81f9-3705b58e0e8c"
    }
});

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(userId) {
        return instance.delete(baseUrl + `follow/${userId}`)
            .then(response => {
                return response;
            });
    },
    follow(userId) {
        return instance.post(baseUrl + `follow/${userId}`)
            .then(response => {
                return response;
            });
    },
};

export const profileApi = {
    getUserProfile(userId) {
        return instance.get(baseUrl + `profile/${userId}`);
    },
    getProfileStatus(userId) {
        return instance.get(baseUrl + `profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(baseUrl + 'profile/status', {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(baseUrl + 'profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data',
            }
        });
    },
    saveProfile(profile) {
        return instance.put(baseUrl + 'profile', profile);
    }
};

export const authApi = {
    getAuthProfile() {
        return instance.get(baseUrl + 'auth/me');
    },
    login(data) {
        return instance.post(baseUrl + 'auth/login', {...data});
    },
    logout() {
        return instance.delete(baseUrl + 'auth/login');
    },
};

export const securityApi = {
    getCaptchaUrl() {
        return instance.get(baseUrl + 'security/get-captcha-url');
    },
};