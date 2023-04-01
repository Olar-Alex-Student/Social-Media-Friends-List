import { useState, useEffect } from "react";
import { Container } from "@mantine/core";
import { FriendList } from "./friend-list";

export const FriendGrid = () => {
    return (
        <Container>
            <FriendList/>
        </Container>
    )
}