import { defineConfig } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    use: {
        baseURL: 'https://reqres.in',

        extraHTTPHeaders: {
            'Content-Type': 'application/json'
        }
    },

    reporter: [
        ['list'],
        ['html', { open: 'never' }]
    ]
});