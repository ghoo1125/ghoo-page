import React, { useState, useEffect } from 'react';

export const fetchToken = (authorizeCode) => {
    console.log("token: " + authorizeCode)
    return authorizeCode
}
