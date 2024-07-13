import type { JsonObject } from "./JsonObject";
import type { RequestSourceMapWriter } from "./SourceMap/RequestSourceMapWriter";

export class Variables {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	private entries: [string, any][];

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	public constructor(json: Record<string, any> | null) {
		this.entries = Object.entries(json ?? {});
	}

	public static empty(): Variables {
		return new Variables({});
	}

	public namespaced(
		operationName: string | null,
		sourceMap: RequestSourceMapWriter,
	): Variables {
		return new Variables(
			Object.fromEntries(
				this.entries.map(([key, value]) => [
					sourceMap.getNamespacedVariableName(operationName, key),
					value,
				]),
			),
		);
	}

	public mergedWith(variables: Variables): Variables {
		return new Variables({ ...this.toJson(), ...variables.toJson() });
	}

	public toJson(): JsonObject {
		return Object.fromEntries(this.entries);
	}

	public toPayloadVariablesString(): string | null {
		if (this.entries.length === 0) {
			return null;
		}

		return JSON.stringify(this.toJson());
	}
}
