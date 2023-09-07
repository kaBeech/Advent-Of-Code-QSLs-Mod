# To Do

## Update DB

- See paper notes

## Update routes

### Move routes from main.ts

- Put them in a new dir backend_web/routes
- Make a new file for each route function
- Write tests for routes

### Adjust http routes

- For example, get Day by route "/user/id:/game/:number/day/:number

## Break controller methods into smaller functions

- There are just a couple to be addressed

## Update logic

- Allow Days/Parts to be completed before rolling mod, but do not award tokens in this case (also warn on frontend before completing unrolled Day/Part)