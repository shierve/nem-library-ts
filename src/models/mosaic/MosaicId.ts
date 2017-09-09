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

import {MosaicIdDTO} from "../../infrastructure/mosaic/MosaicIdDTO";
/**
 *
 * A mosaic id uniquely identifies an underlying mosaic definition.
 */
export class MosaicId {

  /**
   * The corresponding namespace id
   */
  readonly namespaceId: string;

  /**
   * The name of the mosaic definition.
   */
  readonly name: string;

  /**
   * constructor
   * @param namespaceId
   * @param name
   */
  constructor(
    namespaceId: string,
    name: string
  ) {
    this.namespaceId = namespaceId;
    this.name = name;
  }

  toString(): string {
    return this.description();
  }

  /**
   * @internal
   * @returns {{name: string, namespaceId: string}}
   */
  toDTO(): MosaicIdDTO {
    return {
      name: this.name,
      namespaceId: this.namespaceId
    }
  }

  /**
   * @internal
   * @param dto
   * @returns {MosaicId}
   */
  static createFromMosaicIdDTO(dto: MosaicIdDTO): MosaicId {
    return new MosaicId(dto.namespaceId, dto.name);
  }


  /**
   * Compares mosaicIds for equality
   * @param mosaicId
   * @returns {boolean}
   */
  equals(mosaicId: MosaicId): boolean {
    return this.namespaceId == mosaicId.namespaceId && this.name == mosaicId.name;
  }

  /**
   * Mosaic Id description in format namespaceId:name ex: nem:xem
   */
  description(): string {
    return this.namespaceId + ":" + this.name;
  }
}
