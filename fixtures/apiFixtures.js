import { test as base } from '@playwright/test';
import UserService from '../services/userService.js';

export const test = base.extend({

    userService: async ({ request }, use) => {

        const userService = new UserService(request);

        await use(userService);
    }

});

export { expect } from '@playwright/test';