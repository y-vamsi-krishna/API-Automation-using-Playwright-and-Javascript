import { test, expect } from '../fixtures/apiFixtures.js';
import { userData, updatedUserData } from '../test-data/userData.js';
import { expectStatus } from '../utils/apiAssertions.js';

test('Create, fetch and update user', async ({ userService }) => {

    // Create User
    const createResponse = await userService.createUser(userData);

    expectStatus(createResponse, 201);

    const createdUser = await createResponse.json();

    const userId = createdUser.id;

    expect(userId).toBeTruthy();

    console.log(`Created User ID: ${userId}`);


    // Get User
    const getResponse = await userService.getUser(userId);

    expectStatus(getResponse, 200);

    const fetchedUser = await getResponse.json();

    expect(fetchedUser.data.id).toBe(Number(userId));


    // Update User
    const updateResponse = await userService.updateUser(
        userId,
        updatedUserData
    );

    expectStatus(updateResponse, 200);

    const updatedUser = await updateResponse.json();

    expect(updatedUser.name).toBe(updatedUserData.name);
    expect(updatedUser.job).toBe(updatedUserData.job);
});