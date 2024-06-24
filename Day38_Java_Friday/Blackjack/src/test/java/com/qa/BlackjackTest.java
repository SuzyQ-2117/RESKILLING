package com.qa;

import org.junit.Test;
import org.junit.jupiter.api.DisplayName;

import static org.junit.Assert.assertEquals;

public class BlackjackTest {

    Blackjack blackjack = new Blackjack();

    @Test
    @DisplayName("Draw")
    public void handOneEqualsHandTwo() {
        assertEquals(0, blackjack.play(18, 18));
    }

    @Test
    public void bothHandsTooLow(){
        assertEquals(0, blackjack.play(1, 0));
    }

    @Test
    public void handOneBustHandTwoBust() {
        assertEquals(0, blackjack.play(22, 22));
    }

    @Test
    public void handOneBust() {
        assertEquals(19, blackjack.play(22, 19));
    }

    @Test
    public void handTwoBust() {
        assertEquals(16, blackjack.play(16, 22));
    }

    @Test
    public void handOneGreaterThanHandTwo() {
        assertEquals(19, blackjack.play(19, 17));
    }

    @Test
    public void handTwoGreaterThanHandOne() {
        assertEquals(19, blackjack.play(17, 19));
    }

    @Test
    public void handOneTooLow() {
        assertEquals(0, blackjack.play(1, 5));
    }

    @Test
    public void handTwoTooLow() {
        assertEquals(0, blackjack.play(12, 1));
    }
}
