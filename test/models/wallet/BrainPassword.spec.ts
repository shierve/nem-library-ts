/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 NEM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {BrainPassword} from "../../../src/models/wallet/BrainPassword";
import {expect} from "chai";

describe("BrainPassword", () => {

  it("should throw an error when password has less than 12 words", () => {
    expect(() => {
      new BrainPassword("password");
    }).to.throw(Error, "Brain password should be secure, to avoid collisions the password must have at least 12 random words");
  });

  it("should throw an error when password has less than 12 words, 11 words provided", () => {
    expect(() => {
      new BrainPassword("a a a a a a a a a a a ");
    }).to.throw(Error, "Brain password should be secure, to avoid collisions the password must have at least 12 random words");
  });

  it("should create a new brain password", () => {
    const brainPassword = new BrainPassword("entertain destruction sassy impartial morning electric limit glib bait grape icy measure");
    expect(brainPassword.value).to.be.equal("entertain destruction sassy impartial morning electric limit glib bait grape icy measure");
  });
});
