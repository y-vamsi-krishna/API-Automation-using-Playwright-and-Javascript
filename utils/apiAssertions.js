import { expect } from '@playwright/test';

export function expectStatus(response, expectedStatus) {
    expect(
        response.status(),
        `Expected HTTP status ${expectedStatus} but received ${response.status()}`
    ).toBe(expectedStatus);
}