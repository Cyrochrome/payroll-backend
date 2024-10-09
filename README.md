# Payroll Application

## Overview

The Payroll Application is designed to manage employee payroll efficiently. It allows for tracking employee attendance, salaries, bonuses, and deductions while managing user roles and access control.

## Features

- **User Management**: 
  - Login and authentication system.
  - Role-based access control for users.
  
- **Employee Management**: 
  - Add, update, and view employee details.
  - Track employee attendance with timestamps.

- **Payroll Management**: 
  - Manage salaries, bonuses, and deductions.
  - Generate payroll reports.

## Database Structure

The application uses the following tables in its database:

1. **User Table**
   - Manages user login credentials and tokens.
   - Links to the Employee table.

2. **Employee Table**
   - Stores employee details, including hiring date and position.
   - Dependent on the User table.

3. **Position Table**
   - Defines job positions and their respective salary ranges (min and max).

4. **Role Table**
   - Manages user roles within the application.

5. **Role_Rule Table**
   - Defines permissions associated with each role.

6. **Salary Table**
   - Tracks salary details, including amount, status, and timestamps.

7. **Tracking Table**
   - Logs salary payments and links to bonuses and deductions.

8. **Bonus Table**
   - Stores information on bonuses linked to salary tracking.

9. **Deduction Table**
   - Logs deductions linked to salary tracking.

10. **Attendance Table**
    - Tracks employee attendance with check-in and check-out timestamps.

11. **Key Table**
    - Manages authentication tokens for session management.

12. **User_Role Table**
    - Links users to their roles for permissions management.
