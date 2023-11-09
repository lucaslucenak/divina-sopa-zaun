import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const jwtToken = localStorage.getItem('jwtToken');

  if (jwtToken) {
    return true;
  } else {
    return false;
  }
};
