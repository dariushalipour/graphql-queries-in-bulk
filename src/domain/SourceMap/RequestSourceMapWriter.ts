export interface RequestSourceMapWriter {
	newNamespacedFieldName(
		operationName: string | null,
		sourceFieldName: string,
	): string;

	getNamespacedVariableName(
		operationName: string | null,
		sourceVariableName: string,
	): string;

	getNamespacedFragmentName(
		operationName: string | null,
		sourceFragmentName: string,
	): string;
}
