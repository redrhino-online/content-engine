User Management Use Cases
1. User Registration
Description: A user registers for the application by providing a username, email, and password.
Actors: User, Backend (Auth Service)
Preconditions: The user is not already registered.
Success Flow:
The user navigates to the registration page.
The user enters a username, email, and password.
The front-end sends the registration data to the backend.
The backend validates the input and creates a new user record in the database (DynamoDB or Cognito).
The user is notified that registration is successful and automatically logged in.
Postconditions: The user is registered and logged in, and user-specific data is initialized (e.g., empty input lists).
2. User Login
Description: A registered user logs in by providing their username or email and password.
Actors: User, Backend (Auth Service)
Preconditions: The user has already registered.
Success Flow:
The user navigates to the login page.
The user enters their username or email and password.
The front-end sends the login credentials to the backend for authentication.
The backend verifies the credentials and returns a JWT token.
The token is stored on the client, and the user is logged in.
Postconditions: The user is logged in, and the token is stored for future requests. The user can access their own inputs and previously generated responses.
3. User Logout
Description: A logged-in user logs out of the system.
Actors: User
Preconditions: The user is logged in.
Success Flow:
The user clicks the "Logout" button.
The JWT token is removed from the client.
The user is redirected to the login or registration page.
Postconditions: The user is logged out, and their session is invalidated.
4. Password Reset
Description: A user requests a password reset link and resets their password via an email link.
Actors: User, Backend (Auth Service)
Preconditions: The user is registered but has forgotten their password.
Success Flow:
The user clicks "Forgot Password" on the login page.
The user provides their email, and the backend sends a password reset link.
The user receives the link via email, clicks it, and is taken to the password reset form.
The user enters a new password, and the backend updates the user’s record.
Postconditions: The user’s password is updated, and they can now log in with the new credentials.
5. View User Profile
Description: The user views their profile details, such as username, email, and registration date.
Actors: User, Backend (User Service)
Preconditions: The user is logged in.
Success Flow:
The user navigates to the profile page.
The backend retrieves the user’s profile data.
The front-end displays the user’s profile information.
Postconditions: The user’s profile details are displayed.
Input Management Use Cases
6. Create Input (Audience, Challenge, Symptom, Format)
Description: The user can create new entries for inputs (Audience, Challenge, Symptom, Format) that will be available for prompt generation.
Actors: User
Preconditions: The user is logged in.
Success Flow:
The user navigates to the "Manage Inputs" page.
The user clicks "Add Audience" (or another input type) and enters the necessary details (e.g., audience name).
The front-end sends the input data to the backend, which saves it in the database (DynamoDB).
The input is added to the user’s list of inputs.
The new input is now available for selection in the dropdown menus when generating prompts.
Postconditions: The new input is saved in the database and visible only to the user who created it.
7. View All Inputs (Audience, Challenge, Symptom, Format)
Description: The user can view all inputs (audience, challenge, symptom, format) they have previously created.
Actors: User
Preconditions: The user is logged in.
Success Flow:
The user navigates to the "Manage Inputs" page.
The front-end fetches all inputs from the backend.
The front-end displays the inputs in a list or grid format.
Postconditions: The user sees all the inputs they have previously created.
8. Update Input (Audience, Challenge, Symptom, Format)
Description: The user can edit any of their previously created inputs (audience, challenge, symptom, format).
Actors: User
Preconditions: The user is logged in, and the input exists.
Success Flow:
The user navigates to the "Manage Inputs" page.
The user selects an input from the list and clicks "Edit".
The user updates the input details and submits the changes.
The front-end sends the updated input to the backend.
The backend updates the input in the database.
Postconditions: The input is updated and reflected in the user’s available options for prompt generation.
9. Delete Input (Audience, Challenge, Symptom, Format)
Description: The user can delete any of their previously created inputs.
Actors: User
Preconditions: The user is logged in, and the input exists.
Success Flow:
The user navigates to the "Manage Inputs" page.
The user selects an input from the list and clicks "Delete".
The front-end sends a delete request to the backend.
The backend removes the input from the database.
The input is no longer available for selection during prompt generation.
Postconditions: The input is deleted and no longer available for prompt generation.
Response Management Use Cases
10. Generate Response Using User-Specific Inputs
Description: The user generates a prompt using their custom inputs (audience, challenge, symptom, format) and retrieves a response from OpenAI, which is saved in the database along with the inputs used.
Actors: User, Backend, OpenAI API
Preconditions: The user is logged in, and user-specific inputs are available.
Success Flow:
The user selects an audience, challenge, symptom, and format from their custom inputs.
The user clicks the "Generate Response" button.
The front-end sends the prompt and inputs to the backend.
The backend forwards the prompt to the OpenAI API.
The OpenAI API returns a response.
The backend saves the response along with the inputs in the database (DynamoDB).
The front-end displays the response and saves it in the user's history.
Postconditions: The response is generated and saved in the user’s history along with the inputs.
11. View Generated Response History
Description: The user can view a history of all the responses they have generated, along with the inputs that were used.
Actors: User, Backend
Preconditions: The user is logged in, and responses have been generated and saved.
Success Flow:
The user navigates to the "Response History" page.
The front-end requests the user’s response history from the backend.
The backend fetches the user-specific history from the database (DynamoDB).
The front-end displays the history, including the inputs and responses.
Postconditions: The user sees a list of their previously generated responses along with the corresponding inputs.
Authentication & Access Control Use Cases
12. User-Specific Input/Response Isolation
Description: Only the logged-in user can access their inputs and responses. Other users cannot see or modify these records.
Actors: User
Preconditions: The user is logged in, and inputs or responses exist in the database.
Success Flow:
The backend checks the user’s identity using the JWT token.
The backend ensures that only data associated with the logged-in user is retrieved or modified.
Postconditions: The user only sees and can manipulate their own inputs and responses.
Error Handling Use Cases
13. Invalid Login Attempt
Description: The user provides incorrect credentials when attempting to log in.
Actors: User, Backend
Preconditions: The user is registered but enters incorrect login information.
Success Flow:
The user enters incorrect credentials.
The backend validates the credentials and returns an error message if they are incorrect.
The front-end displays an error message.
Postconditions: The user is informed of the invalid credentials and prompted to try again.
14. OpenAI API Failure
Description: The OpenAI API fails to return a response, and the system handles the error gracefully.
Actors: User, Backend, OpenAI API
Preconditions: The user has clicked "Generate Response", but the OpenAI API fails (e.g., rate-limited, unavailable).
Success Flow:
The backend sends the prompt to OpenAI.
The OpenAI API returns an error or does not respond.
The backend returns an error message to the front-end.
The front-end displays an error notification to the user.
Postconditions: The user is informed that the response generation failed, and they are prompted to try again
15. Create Workspace (Admin and User)
Description: A user can create additional workspaces to separate their inputs, generated prompts, and responses. Admins can create workspaces on behalf of users.
Actors: User, Admin
Preconditions: The user or admin is logged in.
Success Flow (User):
The user navigates to the "Workspaces" section.
The user clicks "Create Workspace" and provides a workspace name.
The front-end sends a request to the backend to create the workspace.
The backend creates a new workspace associated with the user in the database.
The new workspace is displayed in the user's workspace list.
Success Flow (Admin):
The admin navigates to the admin view.
The admin selects a user and clicks "Create Workspace" for the user.
The admin provides a workspace name, and the front-end sends the request to the backend.
The backend creates a new workspace associated with the selected user in the database.
The workspace is displayed in both the user’s and admin’s view.
Postconditions: A new workspace is created, either for the user or by the admin on behalf of the user.
16. Switch Between Workspaces (User)
Description: The user can switch between different workspaces to see inputs and responses specific to each workspace.
Actors: User
Preconditions: The user is logged in and has created or been assigned to multiple workspaces.
Success Flow:
The user navigates to the "Workspaces" section.
The user selects a workspace from the list of available workspaces.
The front-end sends a request to the backend to switch the current workspace context.
The front-end updates to display inputs, prompts, and responses specific to the selected workspace.
Postconditions: The user’s view is updated to reflect data from the selected workspace.
17. View and Administer User Inputs and Responses (Admin)
Description: An admin can view all users’ inputs, generated prompts, responses, and workspaces. The admin can also modify or delete users' inputs and responses.
Actors: Admin
Preconditions: The admin is logged in and viewing the list of users.
Success Flow:
The admin navigates to the "Admin" section.
The admin selects a user from the list.
The front-end sends a request to fetch all workspaces, inputs, prompts, and responses for the selected user.
The admin can view and select any workspace associated with the user.
The admin can edit or delete inputs, prompts, or responses.
Any changes made by the admin are sent to the backend and saved in the database.
Postconditions: The admin has full visibility and control over the user’s workspaces, inputs, and generated responses.
18. Create a Default Workspace Upon Registration
Description: When a user first registers, a default workspace called "My Content" is automatically created for the user.
Actors: System, User
Preconditions: The user has just registered.
Success Flow:
Upon successful user registration, the backend automatically creates a new workspace named "My Content" for the user.
The workspace is linked to the user’s account.
The user is logged in and sees the "My Content" workspace by default in their workspace list.
Postconditions: The user’s account is initialized with a default workspace, which will be active until they create or switch to another workspace.
19. Assign and Manage Admin Privileges
Description: An admin can grant or revoke admin privileges for other users, effectively managing who has admin capabilities.
Actors: Admin
Preconditions: The admin is logged in and viewing the list of users.
Success Flow:
The admin navigates to the "Admin" section and selects a user.
The admin clicks "Grant Admin Privileges" or "Revoke Admin Privileges".
The front-end sends a request to the backend to update the user's role.
The backend updates the user’s record in the database to reflect the change in privileges.
The admin sees confirmation of the change, and the user’s permissions are updated accordingly.
Postconditions: The selected user either gains or loses admin capabilities, depending on the action.
20. Admin View Over All Workspaces
Description: The admin can view all workspaces created by any user and manage them (e.g., rename or delete workspaces, see associated inputs and responses).
Actors: Admin
Preconditions: The admin is logged in and viewing the list of users.
Success Flow:
The admin navigates to the "Admin" section and selects a user.
The admin selects a workspace from the user's workspace list.
The admin can view and modify inputs, prompts, and responses associated with that workspace.
The admin can rename or delete the workspace if necessary.
Postconditions: The admin has full control over the workspaces and the data within them for each user.
21. Delete Workspace (User or Admin)
Description: A user can delete a workspace, and all associated inputs and responses within that workspace are deleted. Admins can delete any user’s workspace.
Actors: User, Admin
Preconditions: The user or admin is logged in, and the workspace exists.
Success Flow (User):
The user navigates to the "Workspaces" section.
The user selects a workspace from the list and clicks "Delete".
The front-end sends a delete request to the backend, which deletes the workspace and all related data.
Success Flow (Admin):
The admin navigates to the "Admin" section and selects a user.
The admin selects a workspace from the user’s list and clicks "Delete".
The front-end sends a delete request to the backend, which deletes the workspace and all related data.
Postconditions: The selected workspace and all associated inputs and responses are deleted from the database.
