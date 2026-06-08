import bcrypt

demo_hash = b"$2b$12$z70N0KVRZgNaDNgK0KRr3ez9fu0RgbDfhQJGdeqkORNpHOXYx0/vC"
test_hash = b"$2b$12$BfA.M3fiK4ri0nRW7t5veekT04qOvYpyg.5i9kxPA2eQUBy0mJFIm"

print("Demo 1234:", bcrypt.checkpw(b"1234", demo_hash))
print("Test 0000:", bcrypt.checkpw(b"0000", test_hash))
