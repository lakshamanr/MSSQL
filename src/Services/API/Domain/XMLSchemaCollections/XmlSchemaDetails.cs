namespace API.Domain.XMLSchemaCollections
{
  /// <summary>
  /// Represents the details of an XML schema including SQL script, description, and dependent columns.
  /// </summary>
  public class XmlSchemaDetails
  {
    /// <summary>
    /// Gets or sets the SQL script associated with the XML schema.
    /// </summary>
    public string SqlScript { get; set; }

    /// <summary>
    /// Gets or sets the description of the XML schema.
    /// </summary>
    public string MS_Description { get; set; }

    /// <summary>
    /// Gets or sets the dependent columns of the XML schema.
    /// </summary>
    public string DependentColumn { get; set; }
    public string[] DependentColumns
    {
      get
      {
        if (DependentColumn == null || DependentColumn == string.Empty)
        {
          return Array.Empty<string>();
        }
        return DependentColumn.Split(',');
      }
    }
    /// <summary>
    /// 
    /// </summary>
    public IEnumerable<XmlSchemaReference>  xmlschemreference { get; set; }
    /// <summary>
    /// 
    /// </summary>
    public IEnumerable<XmlSchemaReference> xmlschema { get; set; }
  }
}
