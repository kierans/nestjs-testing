import { ArgumentMetadata, Inject, Injectable, PipeTransform, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";

@Injectable({ scope: Scope.REQUEST })
export class HostPipe implements PipeTransform {
	constructor(@Inject(REQUEST) private request: Request) {

	}

	transform(value: any, metadata: ArgumentMetadata): any {
		return this.request.hostname;
	}
}
